// TeamMembers.jsx
import React from "react";
import "./data_anggota.css";

const members = [
    { id: 1, name: "Dita Annisa Diningtyas", role: "Project Manager", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/7._Asia_Woman.png" },
    { id: 2, name: "Anja Bunga Aditya", role: "Developer", img: "https://img.freepik.com/premium-psd/businesswoman-3d-icon-avatar-people_431668-1290.jpg" },
    { id: 3, name: "Mochamad Nur Fadillah", role: "Designer", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/5._College_Student.png" },
    { id: 4, name: "Asha Antania Anjani", role: "Tester", img: "https://cdn3d.iconscout.com/3d/premium/thumb/female-employee-5143568-4308132.png" },
    { id: 5, name: "Michael Wutama", role: "Analyst", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/1._Asian_Man.png" },
    { id: 6, name: "Naufal Rasyad Mohammad", role: "Scrum Master", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/17._Designer.png" },
    { id: 7, name: "Dimas Wahyu Septian", role: "UI/UX Designer", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/9._West_Woman.png" },
    { id: 8, name: "Rani Eka Tamara", role: "DevOps Engineer", img: "https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/10._Muslim_Woman.png" },

];

const TeamMembers = () => {
    return (
        <div className="team-members-container">
            <h1 className="team-title">Meet Our Team</h1>
            <div className="team-row">
                {members.slice(0, 4).map((member) => (
                    <div key={member.id} className="team-member-card">
                        <div className="profile-pic" style={{ backgroundImage: `url(${member.img})` }}></div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                    </div>
                ))}
            </div>
            <div className="team-row">
                {members.slice(4, 8).map((member) => (
                    <div key={member.id} className="team-member-card">
                        <div className="profile-pic" style={{ backgroundImage: `url(${member.img})` }}></div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
