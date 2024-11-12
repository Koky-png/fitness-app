import React from 'react';

const trainingPrograms = [
  {
    name: 'Strength Training',
    description: 'Focuses on building muscle strength and endurance through resistance exercises.',
    duration: '3-5 times a week',
    benefits: 'Increases muscle mass, improves metabolism, enhances bone density.'
  },
  {
    name: 'Cardiovascular Training',
    description: 'Involves exercises that increase your heart rate, such as running, cycling, or swimming.',
    duration: '3-7 times a week',
    benefits: 'Improves heart health, burns calories, boosts endurance.'
  },
  {
    name: 'Flexibility Training',
    description: 'Includes stretching exercises to enhance flexibility and range of motion.',
    duration: '2-3 times a week',
    benefits: 'Reduces risk of injury, improves posture, enhances performance.'
  },
  {
    name: 'High-Intensity Interval Training (HIIT)',
    description: 'Short bursts of intense exercise followed by rest or low-intensity periods.',
    duration: '2-3 times a week',
    benefits: 'Burns a lot of calories in a short time, improves metabolic rate.'
  },
  {
    name: 'Yoga',
    description: 'Combines physical postures, breathing exercises, and meditation for overall wellness.',
    duration: '2-5 times a week',
    benefits: 'Improves flexibility, reduces stress, enhances mental focus.'
  }
];

const Train = () => {
  return (
    <div>
      <h1>Training Programs for Better Fitness</h1>
      {trainingPrograms.map((program, index) => (
        <div key={index} className="training-program">
          <h2>{program.name}</h2>
          <p><strong>Description:</strong> {program.description}</p>
          <p><strong>Recommended Duration:</strong> {program.duration}</p>
          <p><strong>Benefits:</strong> {program.benefits}</p>
        </div>
      ))}
    </div>
  );
}

export default Train;