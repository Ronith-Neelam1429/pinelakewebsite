import { siteConfig } from "../data/siteConfig";

const DAY_INDEX = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export default function Availability() {
  const today = new Date().getDay();

  return (
    <section className="section availability-section">
      <div className="container">
        <p className="section__eyebrow">Hours</p>
        <h2 className="section__title">Availability</h2>
        <p className="section__subtitle availability-section__intro">
          Open Monday through Saturday — stop by for prescriptions,
          immunizations, and personalized care.
        </p>
        <div className="availability-panel">
          <div className="availability-panel__header">
            <span className="availability-panel__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="availability-panel__label">Weekly schedule</p>
              <p className="availability-panel__note">
                Weekdays 9:00 AM – 6:00 PM · Saturday 10:00 AM – 2:00 PM
              </p>
            </div>
          </div>
          <div className="availability-grid">
            {siteConfig.hours.map((item) => {
              const closed = item.hours.toLowerCase() === "closed";
              const isToday = DAY_INDEX[item.day] === today;
              return (
                <div
                  key={item.day}
                  className={`availability-item${closed ? " availability-item--closed" : ""}${isToday ? " availability-item--today" : ""}`}
                >
                  {isToday && <span className="availability-item__badge">Today</span>}
                  <p className="availability-item__day">{item.day}</p>
                  <p className="availability-item__hours">{item.hours}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
