import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


export default class SelectUrl extends Component {
    constructor(props) {
        super(props);

        const value = props.value || {};
        this.state = {
            currency: value.currency || 'rmb',
        };
    }

    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        console.log('nextProps--', nextProps.value);

        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }

    // handleNumberChange = (e) => {
    //   const number = parseInt(e.target.value || 0, 10);
    //   if (isNaN(number)) {
    //     return;
    //   }
    //   if (!('value' in this.props)) {
    //     this.setState({ number });
    //   }
    //   this.triggerChange({ number });
    // }

    handleCurrencyChange = (currency) => {
        console.log('触发handle');

        if (!('value' in this.props)) {
            this.setState({ currency });
        }
        this.triggerChange({ currency });
    }

    triggerChange = (changedValue) => {
        console.log(changedValue);
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            console.log('触发onchange');
            // onChange(Object.assign({}, this.state, changedValue));
            onChange(changedValue);
        }
    }

    render() {
        const { size } = this.props;
        const state = this.state;
        return (
            <span>
                {/* <Input
            type="text"
            size={size}
            value={state.number}
            onChange={this.handleNumberChange}
            style={{ width: '65%', marginRight: '3%' }}
          /> */}
                <Select
                    value={state.currency}
                    size={size}
                    style={{ width: '100%' }}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
            </span>
        );
    }
}