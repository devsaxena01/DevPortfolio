import React from 'react';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Madan Mohan Malaviya University of Technology Gorakhpur, IN',
    year: '2023 - 2027',
    description: 'Studied core subjects like Data Structures, Algorithms, DBMS, OS, CN, OOPs and Web Development.',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'SG Public School Agra, IN',
    year: '2021 - 2022',
    description: 'Specialized in Science stream with focus on Physics, Chemistry and Mathematics.',
  },
  {
    degree: 'Secondary School (X)',
    institution: 'SG Public School Agra, IN',
    year: '2019 - 2020',
    description: 'Completed foundational education with strong emphasis on Science and Math.',
  },
];

const Education = () => {
  return (
    <section id='education' className='section'>
      <div className='container'>
        <h2 className="text-4xl md:text-4xl font-bold text-center text-indigo-600 mb-8">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map(({degree , institution , year , description}, key) => (
          <div
            key={key}
            className="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-indigo-700">{degree}</h3>
            <p className=" mt-1 text-md font-medium text-gray-300 ">{institution}</p>
            <p className="text-sm text-gray-300 ">{year}</p>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Education;