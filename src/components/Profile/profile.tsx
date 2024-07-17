import React from 'react'

const profileInfomation = {
  name: "Haris Heamanunt",
  birthDay: "06/06/2024",
  age: "29 years old",
  sex: "Male",
}

function Profile() {
  return (
    <section id="profile">
      <div id="profile-container" className="flex w-full h-full justify-center items-center">
        <div id="summary" className='grid grid-cols-1'>
          <p className='text-4xl font-bold mb-[50px]'>Profile</p>
          <p><span className='font-bold'>Name :</span> { profileInfomation.name }</p>
          <p><span className='font-bold'>Date of birth :</span> { profileInfomation.birthDay }</p>
          <p><span className='font-bold'>Age :</span> { profileInfomation.age }</p>
          <p><span className='font-bold'>Sex :</span> { profileInfomation.sex }</p>
        </div>
      </div>
    </section>
  )
}

export default Profile
