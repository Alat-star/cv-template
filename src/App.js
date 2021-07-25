import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser, faBars, faSquare, faMapMarkerAlt, faGlobe, faPhoneAlt, faSave, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import uniqid from 'uniqid';
import Display from './components/Display';
import Header from './components/Header';
import Footer from './components/Footer';

library.add(fab, faCloudUploadAlt, faSave, faGlobe, faPhoneAlt, faSquare, faBars, faCheckSquare, faUser, faMapMarkerAlt, faCoffee, faFacebookF, faTwitter, faLinkedinIn, faInstagram);

class App extends Component {

  constructor(props) {
    super(props)
    this.inputRef =React.createRef()
    this.state = {
      person: {
        bio: {
          name: '',
          email: '',
          address: '',
          job: '',
          telephone: '',
          id: uniqid(),
        },
        file: {
          imageFile: null,
          id: uniqid()
        },
        education: {
          newEdu: {
            schoolName: '',
            title: '',
            course: '',
            startDate: '',
            stopDate: '',
            id: uniqid(),
          },
          educationHistory: [],
          id: uniqid(),
        },
        workXp: {
          experience: {
            company: '',
            title: '',
            tasks: '',
            startDate: '',
            stopDate: '',
            id: uniqid(),
          },
          experiences: [],
        },
        skills: {
          one: '',
          two: '',
          three: '',
          id: uniqid(),
        },
        socials: {
          linkedin: '',
          facebook: '',
          instagram: '',
          id: uniqid(),
        },
        id: uniqid(),
      },
      personList: null,
    }
  }

  setParam = (e, first, second) => {
    e.preventDefault();

    const value = e.target.value;
    
     if (!second || undefined) {
      this.setState( (prevState) => ({
        person: {...prevState.person,
          [first]: {
            ...prevState.person[first],
            [e.target.name]:  value,
            id: this.state.person[first].id
         }
       }
      } )
      )
      return
     }
  
      this.setState( (prevState) => ({
  
        person: {...prevState.person,
  
          [first]: {...prevState.person[first],
  
            [second]: {...prevState.person[first][second],
  
              [e.target.name]: value,
  
              id: this.state.person[first][second].id
            }
         }
       }
      } )
      )
  }

  handleNewImage = (e, first) => {
    this.setState( (prevState) => ({
      person: {...prevState.person,
        [first]: {
          ...prevState.person[first],
          [e.target.name]:  e.target.files[0],
          id: this.state.person[first].id
       }
     }
    } )
    ) 
  }
  

  fetcha = () => {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000));
  }

uploadHandler = () => {
    const {person} = this.state;
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'dwoel74j');
    const options = {
      method: 'POST',
      body: formData,
    };

    

  return fetch('https://api.Cloudinary.com/v1_1/alat-star-cloudinary/image/upload', options)
  .then(res => res.json())
  .then(res =>
        this.setState( (prevState) => ({
        person: {...prevState.person,
        file: {
          ...prevState.person.file,
          imageFile: res.secure_url,
          id: this.state.person.file.id,
           }
         }
        } )
      ))
  .catch(err => console.log(err));

  }



openWidget = () => {
  const {person} = this.state;
  // create the widget
  window.cloudinary.createUploadWidget(
    {
      cloudName: 'alat-star-cloudinary',
      uploadPreset: 'dwoel74j',
    },

    (error, {event, info}) => {
      console.log(info);
      if( event === 'success') {
      this.setState( (prevState) => ({
        person: {...prevState.person,
        file: {
          ...prevState.person.file,
          imageFile: info.secure_url,
          id: this.state.person.file.id,
           }
         }
        } )
      )
      }
    },
  ).open(); // open up the widget after creation
};



 addInput = (education, newInput, educationHistory) => {
  const {person} = this.state;
    const newEntry = Object.assign({}, person);
    const newEdu = newEntry[education][newInput];
    const eduHistory = newEntry[education][educationHistory];
    eduHistory.push(newEdu);
    for (const key in newEdu) {
      key === ('startDate' || 'stopDate') ? console.log(newEdu[key]) : console.log('1')
    }

    this.setState( (prevState) => ({
      person: {...prevState.person,
        [education]: {
          ...prevState.person[education],
          [educationHistory]: [...prevState.person[education][educationHistory], newEdu],
       }
     }
    } )
    )

    const newPerson = Object.assign({}, person);
    let eduTemplate;
    education === 'education' ? eduTemplate = {
      schoolName: '',
      title: '',
      course: '',
      startDate: '',
      stopDate: '',
      id: person[education][newInput].id,
    } : eduTemplate = {
      company: '',
      title: '',
      tasks: '',
      startDate: '',
      stopDate: '',
      id: uniqid(),
    }
    const newArr = Object.assign([], newPerson[education][educationHistory]);
    console.log(newArr);
    this.setState( (prevState) => ({
      person: {...prevState.person,
        [education]: {
          ...prevState.person[education],
          [educationHistory]: newArr,
       }
     }
    } )
    )

    this.setState( (prevState) => ({
      person: {...prevState.person,
        [education]: {
          ...prevState.person[education],
          [newInput]: eduTemplate,
       }
     }
    } )
    )
 }

 

 delAll = (parent, child) => {
  this.setState( (prevState) => ({
    person: {...prevState.person,
      [parent]: {
        ...prevState.person[parent],
        [child]: [],
     }
   }
  } )
  ) 

  }

  removeIndex = (index,parent,arr) => {
    const {person} = this.state
    const newEntry = Object.assign({}, person);
    const eduHistory = newEntry[parent][arr];
    // console.log(eduHistory);
    const newList = eduHistory.filter((character, i) => i !== index)
    this.setState( (prevState) => ({
      person: {...prevState.person,
        [parent]: {
          ...prevState.person[parent],
          [arr]: newList,
       }
     }
    } )
    ) 
  }



  submitBtn = (e) => {
    e.preventDefault();
    const {person} = this.state;

    this.setState({
      personList: person,
      person: {
        bio: {
          name: '',
          email: '',
          address: '',
          telephone: '',
          job: '',
          id: uniqid(),
        },
        file: {
          imageFile: null,
          id: uniqid()
        },
        education: {
          newEdu: {
            schoolName: '',
            title: '',
            course: '',
            startDate: '',
            stopDate: '',
            id: uniqid(),
          },
          educationHistory: []
        },
        workXp: {
          experience: {
            company: '',
            title: '',
            tasks: '',
            startDate: '',
            stopDate: '',
            id: uniqid(),
          },
          experiences: [],
        },
        skills: {
          one: '',
          two: '',
          three: '',
          id: uniqid(),
        },
        socials: {
          linkedin: '',
          facebook: '',
          instagram: '',
          id: uniqid(),
        },
        id: uniqid(),
      },
      
    })

    const toggle = document.querySelector('.form-group');
    console.log(toggle);
    toggle.setAttribute('style', 'display: none;')
    
  }

  render() {
    const {person} = this.state;
    const profile = this.state.personList;

    const eduList = person.education.educationHistory;
    const expList = person.workXp.experiences;
    return (
      <div className='parent-container'>
        <div className='container'>
          <Header />
          <div className='form-group'><Form openWidget={this.openWidget} handleNewImage={this.handleNewImage} uploadHandler={this.uploadHandler} setParam={this.setParam} removeIndex={this.removeIndex} delAll={this.delAll} expList={expList} eduList={eduList} addInput={this.addInput} mychars={person} setBio={this.setBio} setEdu={this.setEdu} setExp={this.setExp} submitHdler={this.submitBtn}  /></div>
          <Display  pupil={profile}  />
          </div>
          <Footer />
      </div>
    )
  }
}

export default App
