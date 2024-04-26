
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';

import './components/css/MainComponent.css';
import './components/css/Footer.css';
import Register from './components/Register';
import Login from './components/Login';
import MainComponent from './components/MainComponent';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import { AddStudentComponent } from './components/AddStudentComponent';
import ListTeacherComponent from './components/ListTeacherComponent';
import { AddTeacherComponent } from './components/AddTeacherComponent';
import ListGradeComponent from './components/ListGradeComponent';
import { AddGradeComponent } from './components/AddGradeComponent';
import ListAssignmentComponent from './components/ListAssignmentComponent';


import AddAssignmentComponent from './components/AddAssignmentComponent';
import ListAssignment from './components/ListAssignment';
import AddAssignment from './components/AddAssignment';
import EditAssignment from './components/EditAssignment';





function App() {
  return (
    <div>
      <BrowserRouter>

  
      <HeaderComponent />
      <div >
        <Routes>

        <Route path="/" element={<MainComponent />} />

        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

    
       
          <Route path="/student" element={<ListStudentComponent /> } />
          <Route path='/add-student' element={<AddStudentComponent />} />
          <Route path='/edit-Student/:id' element={<AddStudentComponent />} />


          <Route path="/teacher" element={< ListTeacherComponent /> } />
          <Route path='/add-teacher' element={<AddTeacherComponent />} />
          <Route path='/edit-teacher/:id' element={<AddTeacherComponent />} />


          <Route path="/grade" element={< ListGradeComponent /> } />
          <Route path='/add-grade' element={<AddGradeComponent />} />
          <Route path='/edit-grade/:id' element={<AddGradeComponent />} />

          <Route path="/assignment" element={< ListAssignmentComponent /> } />
          <Route path='/add-assignment' element={<AddAssignmentComponent />} />
          <Route path='/edit-assignment/:id' element={<AddAssignmentComponent />} />


           <Route path="/assignments" element={<ListAssignment />} />
           <Route path="/add-assignments" element={<AddAssignment />} />
           <Route path="/edit-assignments/:id" element={<EditAssignment/>} />
        </Routes>
        </div>
       
      </BrowserRouter>

      <FooterComponent />
    </div>

    
  );
}


export default App;
