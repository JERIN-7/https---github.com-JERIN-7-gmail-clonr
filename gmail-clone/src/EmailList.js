import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { EmailRow } from './EmailRow';
import { db } from './firebase';
const EmailList = () => {

  const [emails,setEmails] = useState([]);
  useEffect(()=>{
   db.collection('email')
   .orderBy('timestamp','desc')
   .onSnapshot(snapshot => setEmails(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data(), 
   }))))
  },[])
  return (
    <div className='emailList'>

      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <Checkbox/>
            <IconButton>
            <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
            <RedoIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
        </div>
        <div className="emailList__settingsRight">
            <IconButton>
            <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
            <ChevronRightIcon/>
            </IconButton>
            <IconButton>
            <KeyboardHideIcon/>
            </IconButton>
            <IconButton>
            <SettingsIcon/>
            </IconButton>
            

        </div>
    
    </div>   
    <div className="emailList__sections">
        <Section Icon ={InboxIcon} title ="primary" color="red" selected/>
        <Section Icon ={PeopleIcon} title ="social" color="#1A73E8" selected/>
        <Section Icon ={LocalOfferIcon} title ="promotions" color="green" selected/>
    </div> 

    <div className="emailList__list">
      { emails.map(({id,data:{to,subject,message,timestamp}})  =>(
        <EmailRow
            id={id}
            key={id}
            title={to}
            subject = {subject}
            description={message}
            time={new Date (timestamp?.seconds * 1000).toUTCString()}
            />
      ))

      }
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
        <EmailRow
        title="Twitch"
        subject="Hey fellow coder"
        description="this is great"
        time ="10pm"
        />
    </div>
    </div>
  )
}

export default EmailList
