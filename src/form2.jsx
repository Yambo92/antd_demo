import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import BackgroundSlideshow from 'react-background-slideshow'
import bg2 from "./imgs/bg2.jpg";
import bg3 from "./imgs/bg3.jpg";

class NormalLoginForm extends React.Component{
 
  handleSubmit = e => {
    e.preventDefault();
    
    this.props.form.validateFields((errors, values) => {
      if(!errors){
          console.log('Received values of form： ', values);
      }
    })
  };

  render(){
    const { getFieldDecorator } = this.props.form;
      return (
        <div id='components-form-demo-normal-login'>
          <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username',{
              rules:[{required: true, message: 'Please input your username'}]
            })(
              <Input 
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules:[{required:true, message:'Please input your password'}]
            })(
              <Input 
                prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />}
                type="password" placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>remember me</Checkbox>)}
              <a href="#" className="login-form-forgot">
                Frogot password
              </a> <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login 
            </Button><br/>
            Or <a href="#">register now!</a>
          </Form.Item>
        </Form>
        <BackgroundSlideshow images={[ bg2, bg3 ]} />
        </div>
       
      )
  }
}

const WrappedNormalLoginForm = Form.create({
  name: "normal_login"
})(NormalLoginForm)

export default WrappedNormalLoginForm