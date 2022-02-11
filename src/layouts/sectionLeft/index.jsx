import "./SectionLeft.css";

const SectionLeft = ({ color }) => {
  return (
    <section className={`section-dates theme-background`}>
      <div className="section-dates-header">
        <div className={`header-logo theme`}></div>
        <h3>Nicarao Agency</h3>
      </div>
      <div className="section-reminders">
        <div className="reminders-title">
          <h4>Weekly Pinned</h4>
          <button className={`theme-text`}>View All</button>
        </div>
        <div className="reminders-container">
          <div className="reminder reminder1">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <div className="reminder-title">
                <h4>Call doctor for test</h4>
                <span className="reminder-date">15 Mar 2022 - 9:00 AM</span>
              </div>
              <div className="reminder-info">
                <button className="theme">Personal</button>
                <p>Ask for blood test and GYM certificate.</p>
              </div>
            </div>
          </div>

          <div className="reminder reminder2">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <div className="reminder-title">
                <h4>Beatrice"s Bday</h4>
                <span className="reminder-date">22 mar 2022</span>
              </div>
            </div>
          </div>

          <div className="reminder add-reminder">
            <div className="reminder-icon">
              <div className={`icon theme`}></div>
            </div>
            <div className="reminder-text">
              <h4>Add New weekly pin</h4>
            </div>
          </div>
        </div>

        <div className="reminder reminder-calendar">
          <table>
            <thead>
              <tr>
                <th className={`theme-text`}>Mon</th>
                <th className={`theme-text`}>Tue</th>
                <th className={`theme-text`}>Wed</th>
                <th className={`theme-text`}>Thu</th>
                <th className={`theme-text`}>Fri</th>
                <th className={`theme-text`}>Sat</th>
                <th className={`theme-text`}>Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>31</td>
                <td className={`day theme`}>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { SectionLeft };
