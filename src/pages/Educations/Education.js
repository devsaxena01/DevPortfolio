import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md';
const Education = () => {
  return (
    <>
    <div className='education' id='education'>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education</h2>
    <hr/>
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2018 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={< MdSchool/>}
    >
    <h3 className="vertical-timeline-element-title">10 & 12</h3>
    <h4 className="vertical-timeline-element-subtitle">SG Public School Agra, IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2018 - 2022"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={< MdSchool/>}
    >
    <h3 className="vertical-timeline-element-title">10 & 12</h3>
    <h4 className="vertical-timeline-element-subtitle">SG Public School Agra, IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2023 - 2027"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={< MdSchool/>}
    >
    <h3 className="vertical-timeline-element-title">Btech</h3>
    <h4 className="vertical-timeline-element-subtitle">Madan mohan malaviya university of technology, IN</h4>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education