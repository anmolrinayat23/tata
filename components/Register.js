// pages/index.js

// import { useState } from 'react';

// const languageData = {
//   english: {
//     firstName: 'First Name',
//     lastName: 'Last Name',
//     email: 'Email',
//     age: 'Age',
//     gender: 'Gender',
//     mobile: 'Mobile Number',
//     aadhar: 'Aadhar Number',
//     address: 'Address',
//     city: 'City',
//     state: 'State',
//     submit: 'Submit',
//     switchLanguage: 'Switch Language',
//   },
//   hindi: {
//     firstName: 'पहला नाम',
//     lastName: 'उपनाम',
//     email: 'ईमेल',
//     age: 'आयु',
//     gender: 'लिंग',
//     mobile: 'मोबाइल नंबर',
//     aadhar: 'आधार नंबर',
//     address: 'पता',
//     city: 'शहर',
//     state: 'राज्य',
//     submit: 'सबमिट करें',
//     switchLanguage: 'भाषा बदलें',
//   },
// };

// const IndexPage = () => {
//   const [formData, setFormData] = useState({});

//   const [currentLanguage, setCurrentLanguage] = useState('english');
//   const labels = languageData[currentLanguage];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // You can add your form submission logic here
//   };

//   const switchLanguage = () => {
//     setCurrentLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hindi' : 'english'));
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '' }}>
//       <button onClick={switchLanguage} style={{ padding: '8px', marginBottom: '20px' }}>
//         {labels.switchLanguage}
//       </button>
//       <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
//         {Object.entries(labels).map(([fieldName, fieldLabel]) => (
//           <div key={fieldName} style={{ marginBottom: '15px' }}>
//             <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
//               {fieldLabel}:
//               {fieldName === 'address' ? (
//                 <textarea
//                   style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                   name={fieldName}
//                   value={formData[fieldName] || ''}
//                   onChange={handleInputChange}
//                 ></textarea>
//               ) : (
//                 <input
//                   style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                   type={fieldName === 'email' ? 'email' : fieldName === 'age' ? 'number' : 'text'}
//                   name={fieldName}
//                   value={formData[fieldName] || ''}
//                   onChange={handleInputChange}
//                 />
//               )}
//             </label>
//           </div>
//         ))}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#4CAF50',
//             color: 'black',
//             padding: '10px 15px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           {labels.submit}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default IndexPage;












import { useState } from 'react';

const languageData = {
  english: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    age: 'Age',
    gender: 'Gender',
    mobile: 'Mobile Number',
    aadhar: 'Aadhar Number',
    address: 'Address',
    city: 'City',
    state: 'State',
    submit: 'Submit',
    switchLanguage: 'Switch Language',
  },
  hindi: {
    firstName: 'पहला नाम',
    lastName: 'उपनाम',
    email: 'ईमेल',
    age: 'आयु',
    gender: 'लिंग',
    mobile: 'मोबाइल नंबर',
    aadhar: 'आधार नंबर',
    address: 'पता',
    city: 'शहर',
    state: 'राज्य',
    submit: 'सबमिट करें',
    switchLanguage: 'भाषा बदलें',
  },
};

const IndexPage = () => {
  const [formData, setFormData] = useState({});

  const [currentLanguage, setCurrentLanguage] = useState('english');
  const labels = languageData[currentLanguage];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can add your form submission logic here
  };

  const switchLanguage = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'english' ? 'hindi' : 'english'));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',background:'grey' }}>
      <button onClick={switchLanguage} style={{ padding: '8px', marginBottom: '20px' }}>
        {labels.switchLanguage}
      </button>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        {Object.entries(labels).map(([fieldName, fieldLabel]) => (
          <div key={fieldName} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
              {fieldLabel}:
              {fieldName === 'address' ? (
                <textarea
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                  name={fieldName}
                  value={formData[fieldName] || ''}
                  onChange={handleInputChange}
                ></textarea>
              ) : (
                <input
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                  type={fieldName === 'email' ? 'email' : fieldName === 'age' ? 'number' : 'text'}
                  name={fieldName}
                  value={formData[fieldName] || ''}
                  onChange={handleInputChange}
                />
              )}
            </label>
          </div>
        ))}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {labels.submit}
        </button>
      </form>
    </div>
  );
};

export default IndexPage;
