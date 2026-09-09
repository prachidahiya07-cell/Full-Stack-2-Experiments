import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMonths, format, isSameMonth, isToday, subMonths } from 'date-fns';
import { fetchPosts, movePost } from '../features/posts/postSlice';
import { getMonthGrid, getPostsForDate, toDate } from '../utils/dateUtils';
import { performanceMonitor } from '../performance/performanceMonitor';
import './CalendarPage.css';

const platformColors = { LinkedIn: 'blue', Instagram: 'pink', Blog: 'amber', Facebook: 'blue', X: 'slate', YouTube: 'pink' };

function CalendarPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [month, setMonth] = useState(new Date());
  const [optimized, setOptimized] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [draggedPost, setDraggedPost] = useState(null);
  const [dragOver, setDragOver] = useState(null);
  const [performanceData, setPerformanceData] = useState(performanceMonitor.getSnapshot());

  useEffect(() => { if (posts.length === 0) dispatch(fetchPosts()); }, [dispatch, posts.length]);
  useEffect(() => performanceMonitor.subscribe(setPerformanceData), []);
  useEffect(() => { performanceMonitor.setMode(optimized ? 'optimized' : 'non-optimized'); }, [optimized]);

  const days = useMemo(() => getMonthGrid(month), [month]);
  const monthPosts = posts.filter((post) => { const date = toDate(post.scheduledAt); return date && isSameMonth(date, month); });
  const scheduledCount = monthPosts.filter((post) => post.status === 'Scheduled').length;
  const draftsCount = monthPosts.filter((post) => post.status === 'Draft').length;
  const channelCount = new Set(monthPosts.map((post) => post.platform)).size;
  const selectedPosts = getPostsForDate(posts, selectedDate);
  const renderCount = performanceData.totalRenderCount;
  const calendarDays = days.filter((day) => isSameMonth(day, month)).length;
  const efficiency = renderCount ? Math.min(100, Math.round((monthPosts.length / renderCount) * 100)) : 100;

  function dropPost(date) {
    if (!draggedPost) return;
    const post = posts.find((item) => item.id === draggedPost);
    if (!post) return;
    const original = toDate(post.scheduledAt);
    const target = new Date(date);
    target.setHours(original.getHours(), original.getMinutes(), 0, 0);
    performanceMonitor.beginInteraction(`Moved ${post.title}`);
    dispatch(movePost({ id: post.id, newScheduledAt: target.toISOString() }));
    setDraggedPost(null); setDragOver(null);
    requestAnimationFrame(() => requestAnimationFrame(() => performanceMonitor.finishInteraction()));
  }

  return (
    <main className="workspace">
      <aside className="rail">
        <div className="rail__brand"><span className="brand-mark">◈</span><span>publishly</span></div>
        <nav className="rail__nav" aria-label="Primary navigation">
          <button className="rail__nav-item rail__nav-item--active"><span>▦</span> Calendar</button>
          <button className="rail__nav-item"><span>▤</span> Posts</button>
          <button className="rail__nav-item"><span>◌</span> Analytics</button>
        </nav>
        <div className="rail__rule" /><p className="rail__label">UP NEXT</p>
        <div className="rail__up-next">{posts.filter((post) => post.status === 'Scheduled').slice(0, 3).map((post) => <div className="rail__next" key={post.id}><span className={`rail__dot rail__dot--${platformColors[post.platform] || 'blue'}`} /><div><strong>{format(toDate(post.scheduledAt), 'MMM d')}</strong><span>{post.platform}</span></div></div>)}</div>
        <button className="rail__settings">⚙ Settings</button>
      </aside>
      <section className="content">
        <header className="topbar"><div><span className="eyebrow">CONTENT CALENDAR</span><h1>Plan your next <em>great idea.</em></h1></div><button className="create-button" onClick={() => window.location.href = '/posts/create'}>＋ Create post</button></header>
        <div className="stats-row"><div><span className="stat-dot stat-dot--blue" /><strong>{scheduledCount}</strong><span>scheduled this month</span></div><div><span className="stat-dot stat-dot--amber" /><strong>{draftsCount}</strong><span>drafts to review</span></div><div><span className="stat-dot stat-dot--pink" /><strong>{channelCount}</strong><span>active channels</span></div></div>
        <div className="main-grid">
          <section className="calendar-card">
            <div className="calendar-head"><div className="month-nav"><button onClick={() => setMonth(subMonths(month, 1))} aria-label="Previous month">‹</button><h2>{format(month, 'MMMM')} <span>{format(month, 'yyyy')}</span></h2><button onClick={() => setMonth(addMonths(month, 1))} aria-label="Next month">›</button><button className="today-button" onClick={() => { setMonth(new Date()); setSelectedDate(new Date()); }}>Today</button></div><div className="legend"><span><i className="legend__dot legend__dot--pink" /> Instagram</span><span><i className="legend__dot legend__dot--blue" /> LinkedIn</span><span><i className="legend__dot legend__dot--amber" /> Blog</span></div></div>
            <div className="weekday-row">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}</div>
            <div className="month-grid">{days.map((day) => { const dayPosts = getPostsForDate(posts, day); const key = format(day, 'yyyy-MM-dd'); return <div className={`day-cell ${!isSameMonth(day, month) ? 'day-cell--muted' : ''} ${isToday(day) ? 'day-cell--today' : ''} ${dragOver === key ? 'day-cell--over' : ''}`} key={key} onClick={() => setSelectedDate(day)} onDragOver={(event) => { event.preventDefault(); setDragOver(key); }} onDragLeave={() => setDragOver(null)} onDrop={() => dropPost(day)}><span className="day-number">{format(day, 'd')}</span>{dayPosts.slice(0, 3).map((post) => <button className={`event-pill event-pill--${platformColors[post.platform] || 'blue'}`} draggable onDragStart={() => setDraggedPost(post.id)} onClick={(event) => { event.stopPropagation(); setSelectedDate(day); }} key={post.id}><span>{format(toDate(post.scheduledAt), 'h:mm')}</span>{post.title}</button>)}</div>; })}</div>
          </section>
          <aside className="render-lab"><div className="lab-head"><div><span className="eyebrow">RENDER LAB</span><h2>ON</h2></div><button aria-label="More options">•••</button></div><div className="mode-switch"><button className={!optimized ? 'is-active' : ''} onClick={() => setOptimized(false)}>Non-optimized</button><button className={optimized ? 'is-active' : ''} onClick={() => setOptimized(true)}>Optimized</button></div><button className="reset-button" onClick={() => performanceMonitor.setMode(optimized ? 'optimized' : 'non-optimized')}>Reset</button><div className="render-total"><strong>{renderCount}</strong><span>app renders</span></div><div className="calculation"><h3>Rendering Calculation</h3><div><span>Calendar posts</span><strong>{monthPosts.length}</strong></div><div><span>Optimization</span><strong>{optimized ? 'Optimized' : 'Not Optimized'}</strong></div><div><span>Render cycles</span><strong>{renderCount}</strong></div><div className="meter"><span style={{ width: `${efficiency}%` }} /></div><small>Render efficiency: {efficiency}%</small></div><div className={`lab-note ${optimized ? 'lab-note--blue' : ''}`}><span>●</span><div><strong>{optimized ? 'Optimized rendering' : 'Non-optimized rendering'}</strong><small>{optimized ? 'Only changed items update.' : `Each drag updates all ${calendarDays} days.`}</small></div></div>{selectedPosts.length > 0 && <div className="selected-post"><span className="eyebrow">SELECTED DATE</span><strong>{format(selectedDate, 'MMM d')}</strong><span>{selectedPosts[0].title}</span></div>}</aside>
        </div>
      </section>
    </main>
  );
}

export default CalendarPage;
