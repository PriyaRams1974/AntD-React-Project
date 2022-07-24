import { Space, Table, Tag } from 'antd';
import React, {useState, useEffect} from "react";
import axios from 'axios';


function Users() {
    const [userList, setUserList] = useState([]);  

    useEffect(()=>{
        getUsersDetails();
    },{});

    const getUsersDetails = async()=>{
            const token = localStorage.getItem('token');
            const result = await axios.get(`http://localhost:7070/api/v1/users/getAllUsers`,{  
            })
             console.log("result =",result.data.result);
             setUserList(result.data.result);
        }
const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'LoginStatus',
      dataIndex: 'loginStatus',
      key: 'loginStatus',
    },
    

//   {
//     title: 'Tags',
//     key: 'mobileNumber',
//     dataIndex: 'mobileNumber',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';

//           if (tag === 'loser') {
//             color = 'volcano';
//           }

//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

return(
    <div>
        <Table columns={columns} dataSource={userList} />;
    </div>
)

}
export default Users;