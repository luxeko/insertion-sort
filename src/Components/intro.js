import React from 'react';
import './style.scss'
import img1 from '../Assets/User/avatar1.jpg'
import img2 from'../Assets/User/avatar2.jpg'
import img3 from'../Assets/User/avatar3.jpg'
import img4 from'../Assets/User/avatar4.jpg'
import { Link } from 'react-router-dom';
function Intro() {
    const members = [
        {id: 0, avatar_url: img3, name: "Lê Khả Đức Anh", role: "Leader", quest: "code, phân công việc, thuyết trình", facebook_url: ""},
        {id: 1, avatar_url: img2, name: "Đỗ Thế Đạt", role: "Member", quest: "tìm tài liệu, nghiên cứu thuật toán", facebook_url: ""},
        {id: 2, avatar_url: img4, name: "Nguyễn Văn Hưng", role: "Member", quest: "tìm tài liệu, nghiên cứu thuật toán", facebook_url: ""},
        {id: 3, avatar_url: img1, name: "Nguyễn Thị Thanh Thảo", role: "Member", quest: "tìm tài liệu, nghiên cứu thuật toán", facebook_url: ""},
    ]
   
    const Member = () => {
        return (
            members.map(member => (
                <div key={member.id} className='member'>
                    <div className='avatar'>
                        <img src={member.avatar_url} alt={'avatar' + member.id}/>
                    </div>
                    <div className='content'>
                        <div className='details'>
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                            <h3><span>Nhiệm vụ</span>: {member.quest}</h3>
                        </div>
                    </div>
                    <div className='btn_link'>
                        <button><i className="fa-brands fa-square-facebook"></i> <span>Facebook</span></button>
                        <button><i className="fa-brands fa-youtube"></i> <span>Youtube</span></button>
                    </div>
                </div>
            ))
        )
    }
    return (
        <>
            <div className="title">
                <h1>Insertion sort (Thuật toán sắp xếp chèn)</h1>
                <h2>Trình bày: Nhóm 4</h2>
            </div>
            <div className='list__member'>
                <Member />
            </div>
            <Link className='next__page' to="/InsertionSort">
                <div>
                    <div>
                        <p>Mở đầu</p>
                    </div>
                    <i className="fa-solid fa-forward"></i>
                </div>
            </Link>
        </>
    );
}

export default Intro;