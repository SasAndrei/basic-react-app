import {useState} from 'react';
import {TextInput, Label, Button, Card, Dropdown} from 'flowbite-react/lib/esm/components';
// import {useNavigate} from "react-router-dom";

export default function Users() {
    // const navigate = useNavigate();
    const [userState, setUserState] = useState({name: "", username: "", password: "", role: ""});
    const [userListState, setUserListState] = useState([]);
    const [editState, setEditState] = useState(false)
    const [oldState, setOldState] = useState({})


    const removeElement = (e) => {
        let filteredArray = userListState.filter(item => item.username !== e.username)
        setUserListState({userListState: filteredArray});
    }

    const handleChange = (e) => {
        setUserState({...userState, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userState.name === "" || userState.username === "" || userState.password === "" || userState.role === "") {
            alert("User data is not complete!")
        }
        else if (editState === false) {
            userListState.push(userState)
            setUserListState(userListState)
            setUserState({name: "", username: "", password: "", role: ""})
            console.log(userListState)
        }
        else {
            removeElement(oldState)
            userListState.push(userState)
            setUserListState(userListState)
            setUserState({name: "", username: "", password: "", role: ""})
            setOldState({name: "", username: "", password: "", role: ""})
            setEditState(false)
        }
    }

    const handleEdit = (e) => {
        setUserState(e)
        setOldState(e)
        setEditState(true)
        console.log(e)
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="grid grid-cols-1 gap-x-4 mb-4">
                    <Label>Name</Label>
                    <TextInput
                        key={'name'}
                        onChange={handleChange}
                        value={userState.name}
                        id={'name'}
                    />
                    <Label>Username</Label>
                    <TextInput
                        key={'username'}
                        onChange={handleChange}
                        value={userState.username}
                        id={'username'}
                    />
                    <Label>Role</Label>
                    <Dropdown label={userState.role} color="dark" dismissOnClick={true}>
                        <Dropdown.Item onClick={() => setUserState({...userState, role: "Admin"})}>Admin</Dropdown.Item>
                        <Dropdown.Item onClick={() => setUserState({...userState, role: "User"})}>User</Dropdown.Item>
                    </Dropdown>
                    <Label>Password</Label>
                    <TextInput
                        key={'password'}
                        onChange={handleChange}
                        value={userState.password}
                        type='password'
                        id={'password'}
                    />
                    <Button type={'submit'} onSubmit={handleSubmit} color="dark" size="sm">
                        {'Add User'}
                    </Button>
                </div>
            </form>
            <div>
                {
                    userListState.map(users =>
                        <div>
                            <Card>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {users.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {users.username};{users.role}
                                </p>
                                <Button onClick={() => handleEdit(users)} color="dark" size="sm">
                                    {'Edit User'}
                                </Button>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );

}
