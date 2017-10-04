import React from 'react';
import { View } from 'react-native';

import DataEntry from './dataEntry';
import Operations from './operations';
import Command from './command';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            num1: '000', 
            num2: '000',
            op: 'sum'
        };
    }

    handleChange(field, value) {
        this.setState({ [field]: value });
    }

    operationChange(op) {
        this.setState({ op });
        //console.log(op);
    }

    calculate() {
        let result = 0;
        const num1 = parseFloat(this.state.num1);
        const num2 = parseFloat(this.state.num2);

        switch (this.state.op) {
            case 'sum':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            default:
                break;
        }

        this.props.action(result.toString());
    }

    render() {
        return (
            <View>
                <DataEntry 
                    num1={this.state.num1} 
                    num2={this.state.num2} 
                    action={this.handleChange.bind(this)} 
                />
                <Operations 
                    op={this.state.op} 
                    action={this.operationChange.bind(this)} 
                />
                <Command action={this.calculate.bind(this)} />
            </View>
        );
    }
}

export { Panel };
