import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-daterangepicker/daterangepicker.js'
import 'bootstrap-daterangepicker/daterangepicker.css'
import * as moment from 'bootstrap-daterangepicker/moment.min.js'
import $ from 'jquery'
// import { Link } from 'react-router-dom';
// import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      activeMenuItem: 'comments'
    }
  }

  componentDidMount() {
    $('.date-range-picker').daterangepicker({
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }, function (start, end) {
      this.setState({
        startDate: start,
        endDate: end
      })
    }.bind(this));
  }

  toggleMenuClass(menuItem) {
    this.setState({ activeMenuItem: menuItem })
  }

  render() {
    const { activeMenuItem } = this.state
    const filterTemplate = (
      <div className="filter-wrapper pl-3">
        <span className="text-uppercase title font-weight-bold">filter by</span>
        <div className="filters">
          <div className="title pt-4 text-uppercase">
            <span className="tick">&#10004;</span>
            Group
          </div>
          <div className="filter-option selected">
            <span className="tick"> &#10004;	</span>
            All
          </div>
          <div className="filter-option">
            <span className="tick"> &#10004;	</span>
            Promoters
          </div>
          <div className="filter-option">
            <span className="tick"> &#10004;	</span>
            Detractors
          </div>
          <div className="filter-option">
            <span className="tick"> &#10004;	</span>
            Passives
          </div>

          <div className="title pt-4 text-uppercase">
            <span className="tick">&#10004;</span>
            Channels
          </div>
          <div className="filter-option selected">
            <span className="tick">&#10004;</span>
            All
          </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Email
          </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Web Embed
          </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Web Page
          </div>

          <div className="title pt-4 text-uppercase">
            <span className="tick">&#10004;</span>
            Gender
          </div>
          <div className="filter-option selected">
            <span className="tick">&#10004;</span>
            All
            </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Male
            </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Female
            </div>
          <div className="filter-option">
            <span className="tick">&#10004;</span>
            Not Specified
            </div>

          <div className="help-text pt-4">
            Learn about custom properties
          </div>
        </div>
      </div>
    );
    const commentTemplate = (
      <div className="comment-wrapper">
        <header>
          <span className="title font-weight-bold"> Comments </span>

          <div className="header-filter-wrapper">
            {/* date range picker */}
            <span className="date-range-picker pl-1 pr-2">
              <i className="fa fa-calendar p-1"></i>
              {/* Jan 8, 2019 to Feb 6, 2019 */}
              {this.state.startDate.format('MMMM D, YYYY') + ' - ' + this.state.endDate.format('MMMM D, YYYY')}
              <i className="fa fa-angle-down p-1"></i>
            </span>

            {/* search button */}
            <div className="search">
              <i className="fa fa-search"></i>
              <input placeholder='Search comments' className="m-0" />
            </div>

            {/* pagination detail */}
            <div className="dropdown">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                1 - 21
            </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">20</a>
                <a className="dropdown-item" href="#">30</a>
                <a className="dropdown-item" href="#">40</a>
              </div>
            </div>

            {/* previous and next button */}
            <div className="pagination-icon">
              <button disabled><i className="fa fa-angle-left"></i></button>
              <button><i className="fa fa-angle-right"></i></button>
            </div>
          </div>
        </header>
        <section className="comments mt-3">
          {/* comment 1 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">9</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Isaac Hunt
                <span className="time-span"> 10 hours ago</span>
              </div>
              <div className="message">
                Love that you guys offer free shipping and free returns. I hate when people don’t. Not sure my friends really have the same taste as me.
              </div>
            </div>
          </div>
          {/* comment 2 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">7</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Justine Robinson
                <span className="time-span"> 12 hours ago</span>
              </div>
              <div className="message">
                My orders have been shipping slower and slower and it seems the denim you are using these days is a lots thinner. It is wearing in the knees a lot faster. Still a fan, but hope you can get quality back on track.
              </div>
            </div>
          </div>

          {/* comment 3 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">10</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Wim Willems
                <span className="time-span"> 1 day ago</span>
              </div>
              <div className="message">
                Ordered 3 pair of jeans last week. They arrived super fast and love them. And really love the washing instructions you give. Never knew you don’t wash jeans every week.
              </div>
            </div>
          </div>

          {/* coment 4 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">2</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Christian Russell
                <span className="time-span"> 1 days ago</span>
              </div>
              <div className="message">
                Your Palo Alto store is freezing!! I only stayed about 3 minutes as I couldn’t stand it any longer. Are you trying to clear out your sweater stock?!? Seems fishy to me.
              </div>
            </div>
          </div>

          {/* commment 5 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">9</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Pavith Nadal
                <span className="time-span"> 2 days ago</span>
              </div>
              <div className="message">
                When I shop online I end up returning half of the stuff I order, so it’s always nice when I can come into the store to make sure I love the color and fit. The staff is always really friendly.
              </div>
            </div>
          </div>
          {/* comment 6 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types passives">8</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                CeeCee Bass
                <span className="time-span"> 3 days ago</span>
              </div>
              <div className="message">
                I wear oxfords every day. Been wearing them for over 20 years. And now I’ve found the perfect oxford. Best fit and the price is amazing for the quality. Nice job. Only issue is the buttons come loose a bit easy.
              </div>
            </div>
          </div>

          {/* coment 7  */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">1</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Jel Chibuzo
                <span className="time-span"> 1 month ago</span>
              </div>
              <div className="message">
                Nothing fits me. I’m a bigger guy, so maybe you are focusing on super tiny guys, but can’t recommend you to my friends since I don’t wear any of your stuff.
              </div>
            </div>
          </div>
          {/* comment 8 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">9</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Isaac Hunt
                <span className="time-span"> 10 hours ago</span>
              </div>
              <div className="message">
                Love that you guys offer free shipping and free returns. I hate when people don’t. Not sure my friends really have the same taste as me.
              </div>
            </div>
          </div>
          {/* comment 09 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">7</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Justine Robinson
                <span className="time-span"> 12 hours ago</span>
              </div>
              <div className="message">
                My orders have been shipping slower and slower and it seems the denim you are using these days is a lots thinner. It is wearing in the knees a lot faster. Still a fan, but hope you can get quality back on track.
              </div>
            </div>
          </div>

          {/* comment 10 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">10</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Wim Willems
                <span className="time-span"> 1 day ago</span>
              </div>
              <div className="message">
                Ordered 3 pair of jeans last week. They arrived super fast and love them. And really love the washing instructions you give. Never knew you don’t wash jeans every week.
              </div>
            </div>
          </div>

          {/* coment 11 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">2</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Christian Russell
                <span className="time-span"> 1 days ago</span>
              </div>
              <div className="message">
                Your Palo Alto store is freezing!! I only stayed about 3 minutes as I couldn’t stand it any longer. Are you trying to clear out your sweater stock?!? Seems fishy to me.
              </div>
            </div>
          </div>

          {/* commment 12 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types promoters">9</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Pavith Nadal
                <span className="time-span"> 2 days ago</span>
              </div>
              <div className="message">
                When I shop online I end up returning half of the stuff I order, so it’s always nice when I can come into the store to make sure I love the color and fit. The staff is always really friendly.
              </div>
            </div>
          </div>
          {/* comment 13 */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types passives">8</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                CeeCee Bass
                <span className="time-span"> 3 days ago</span>
              </div>
              <div className="message">
                I wear oxfords every day. Been wearing them for over 20 years. And now I’ve found the perfect oxford. Best fit and the price is amazing for the quality. Nice job. Only issue is the buttons come loose a bit easy.
              </div>
            </div>
          </div>

          {/* coment 14  */}
          <div className="comment mb-3">
            <div className="rating">
              <div className="types detractors">1</div>
            </div>
            <div className="name-message-wrapper">
              <div className="name">
                Jel Chibuzo
                <span className="time-span"> 1 month ago</span>
              </div>
              <div className="message">
                Nothing fits me. I’m a bigger guy, so maybe you are focusing on super tiny guys, but can’t recommend you to my friends since I don’t wear any of your stuff.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    const sideBarTemplate = (
      <div className="sidebar-wrapper pt-4">
        <span className="title font-weight-bold pl-3">ACME Apparels</span>
        <div className="pl-3">
        <div className="score-wrapper mt-3">
          <div>
            <span className="nps-score pl-2"> 70 </span>
            <span className="nps-time-frame pl-2"> 30-DAY NPS </span>
          </div>
          <div className="hr m-0"></div>
          <div className="individual-score-wrapper pl-2 pt-2">
            <div className="d-flex pb-2">
              <div className="score font-weight-bold promoters">80%</div>
              <div className="type font-weight-bold text-uppercase pl-4">promoters</div>
            </div>
            <div className="d-flex pb-2">
              <div className="score font-weight-bold passives">10%</div>
              <div className="type font-weight-bold text-uppercase pl-4">passives</div>
            </div>
            <div className="d-flex pb-2">
              <div className="score font-weight-bold detractors">10%</div>
              <div className="type font-weight-bold text-uppercase pl-4">Detractors</div>
            </div>
          </div>
        </div>
        
        </div>
        <div className='menu-container pt-3'>
          <ul className='menu p-0 text-left font-weight-bold unstyled'>
            <a to='/'>
              <li className={`pl-3 ${activeMenuItem === 'comments' ? 'active' : null}`} onClick={() => { this.toggleMenuClass('comments') }}>
                Comments
            </li>
            </a>
            <a to='/'>
              {/* <a to='/metrics'> */}
              <li className={`pl-3 ${activeMenuItem === 'metrics' ? 'active' : null}`} onClick={() => { this.toggleMenuClass('metrics') }}>
                Metrics
              </li>
            </a>
            <a to='/'>
              {/* <a to='/people'> */}
              <li className={`pl-3 ${activeMenuItem === 'people' ? 'active' : null}`} onClick={() => { this.toggleMenuClass('people') }}>
                People
              </li>
            </a>
            <a to='/profile-setting'>
              <li className={`pl-3 ${activeMenuItem === 'settings' ? 'active' : null}`} onClick={() => { this.toggleMenuClass('settings') }}>
                Settings
            </li>
            </a>
          </ul>
        </div>
        <div className="survey-people text-center">
          <button className="font-weight-bold" data-toggle="modal" data-target="#scriptModal"> SURVEY PEOPLE</button>
        </div>
      </div>
    );
    return (
      <div className="app">
        <div className="side-block">
          {sideBarTemplate}
        </div>
        <div className="main-block-wrapper">
          <div className="main-block">
            <div className="comments-list p-4">
              {commentTemplate}
            </div>
            <div className="filter-list pt-4">
              {filterTemplate}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
