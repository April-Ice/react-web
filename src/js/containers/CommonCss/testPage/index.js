import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd';

import SelectUrl from './selectUrl'

const FormItem = Form.Item;
const Option = Select.Option;


export default class Demo extends Component {
  constructor(props) {
    super(props);

  }
  handleCancel = () => {

  }


  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <div>
        <MyForm
          ref='myForm'
          // dbOutCode={this.state.dbOutCode}
          // url={this.state.url}
          // getData={this.state.resData}
          onCancel={this.handleCancel}
        // refreshHandle={this.refreshHandle}
        />
      </div>
    );
  }
}



class SelfForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    // if (value.number > 0) {
    //   callback();
    //   return;
    // }
    // callback('Price must greater than zero!');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem label="Price">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: this.checkPrice }],
          })(< SelectUrl />)}
        </FormItem>
        <FormItem label="Price2">
          {getFieldDecorator('price2', {
            initialValue: { number: 0, currency: 'rmb2' },
            rules: [{ validator: this.checkPrice }],
          })(< SelectUrl />)}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}
let MyForm = Form.create()(SelfForm);

// ReactDOM.render(<WrappedDemo />, mountNode);