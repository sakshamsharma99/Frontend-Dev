import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, getStudentById, addStudent, updateStudent, deleteStudent } from './services/studentService';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [students, setStudents] = useState([]);
  
  const [currentView, setCurrentView] = useState('list'); 
  
  const [selectedStudent, setSelectedStudent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
  

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (loggedInUser) => {
    setUser(loggedInUser);
    setIsLoggedIn(true);
    setIsLoading(true);
    try {
      const data = await getStudents();
      if (loggedInUser.role === 'student') {
        const myData = data.filter(s => s.id === loggedInUser.studentId);
        setStudents(myData);
      } else {
        setStudents(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setStudents([]);
    setCurrentView('list');
    setSelectedStudent(null);
  };

  const handleLoadStudents = async () => {
    setIsLoading(true);
    try {
      const data = await getStudents();
      if (user && user.role === 'student') {
        const myData = data.filter(s => s.id === user.studentId);
        setStudents(myData);
      } else {
        setStudents(data);
      }
    } catch (error) {
      alert('Failed to load students. Make sure JSON Server is running on port 3001.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNew = () => {
    setSelectedStudent(null);
    setIsEditMode(false);
    setCurrentView('form');
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsEditMode(true);
    setCurrentView('form');
  };

  const handleViewDetails = async (studentId) => {
    setIsLoading(true);
    try {
      const student = await getStudentById(studentId);
      setSelectedStudent(student);
      setCurrentView('details');
    } catch (error) {
      alert('Failed to load student details');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (studentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;

    setIsLoading(true);
    try {
      await deleteStudent(studentId);
      const data = await getStudents();
      setStudents(data);
      alert('Student deleted successfully!');
    } catch (error) {
      alert('Failed to delete student');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (studentData) => {
    setIsLoading(true);
    try {
      if (isEditMode) {
        await updateStudent(selectedStudent.id, studentData);
        alert('Student updated successfully!');
      } else {
        await addStudent(studentData);
        alert('Student added successfully!');
      }

      const data = await getStudents();
      setStudents(data);
      setCurrentView('list');
      setSelectedStudent(null);
    } catch (error) {
      alert(`Failed to ${isEditMode ? 'update' : 'add'} student`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedStudent(null);
    setIsEditMode(false);
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      {/* User Header with Logout */}
      <div className="user-header">
        <div className="user-info">
          <span className="user-welcome">Welcome, <strong>{user.username}</strong></span>
          <span className={`user-role ${user.role}`}>
            {user.role === 'teacher' ? '👨‍🏫 Teacher' : '🎓 Student'}
          </span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      {currentView === 'list' && (
        <StudentList
          students={students}
          onAddNew={handleAddNew}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewDetails={handleViewDetails}
          onLoadStudents={handleLoadStudents}
          isLoading={isLoading}
          userRole={user.role}
        />
      )}

      {currentView === 'form' && (
        <StudentForm
          student={selectedStudent}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
          isEditMode={isEditMode}
        />
      )}

      {currentView === 'details' && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
}

export default App;