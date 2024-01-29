import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { postData } from "../API/API";
import { useProfileContext } from "../Context/ProfileContext";

const onFinish = (values: unknown) => {
  //   console.log("Success:", values);
};

const onFinishFailed = (errorInfo: unknown) => {
  //   console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
};

const Auth: React.FC = () => {
  const { setUser } = useProfileContext();
  const [login, setLogin] = useState<boolean>(true);
  const [body, setBody] = useState<FieldType>({});
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async () => {
    login
      ? setBody({ email, password })
      : setBody({ username, email, password });
    const res = await postData("http://localhost:4000/user/login", body);
    setUser(res?.data.content.user);
    // Since setUser is asynchronous, the updated user value might not be available immediately
    // Use the setUser callback to log the updated user value
    setUser((updatedUser) => {
      console.log(updatedUser);
      return updatedUser;
    });
  };

  const usernameField = () => {
    return login ? (
      <></>
    ) : (
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input value={username} onChange={handleUsernameChange} />
      </Form.Item>
    );
  };

  return (
    <>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {usernameField()}
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input value={email} onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password value={password} onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
