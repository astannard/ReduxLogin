import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, } from 'react-native'
import { Container, Content, Form, Item, Input,Label, Button, CheckBox, Picker } from 'native-base';

import {expenseFormUpdate} from '../../actions';

class ExpenseEntry extends Component{

    render(){
        return(
            <Container>
                <Content>
                    <Form>

                        <Item floatingLabel>
                            <Label>Date</Label>
                            <Input 
                                value={this.props.date}
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'date',
                                        value
                                    }
                                )} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Amount</Label>
                            <Input 
                                value={this.props.amount} 
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'amount',
                                        value
                                    }
                                )} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Description</Label>
                            <Input 
                                value={this.props.description} 
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                        {
                                            prop:'description',
                                            value
                                        }
                                    )} />
                        </Item>
                        

                        <Item floatingLabel>
                            <Label>Category</Label>
                            <Input 
                                value={this.props.category}
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'category',
                                        value
                                    }
                                )} />

                        </Item>
                        

                        <Item floatingLabel>
                            <Label>Ref no</Label>
                            <Input 
                                value={this.props.refno}
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'refno',
                                        value
                                    }
                                )} />
                        </Item>
                        

<Item>
        <Label>VAT rate</Label>
                            <Picker
                                floatingLabel
                                style={{flex:1}}
                                selectedValue={this.props.vatrate}
                                iosHeader="pick VAT rate"
                                onValueChange={value => this.props.expenseFormUpdate(
                                    {
                                        prop:'vatrate',
                                        value
                                    })} >
                                <Picker.Item label="Lower Rate (5.00%)" value="A" />
                                <Picker.Item label="Exempt (0.00%)" value="E" />
                                <Picker.Item label="Zero Rated (0.00%)" value="Z" />
                                <Picker.Item label="Standard (20.00%)" value="S" />
                            </Picker>
 </Item>
               


                        <Item>
                            <Label>billable</Label>
                            <CheckBox 
                                checked={this.props.billable}
                                onValueChange={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'billable',
                                        value
                                    }
                                )} />
                        </Item>

                       <Item last>
                            <Label>Contract to bill</Label>
                            <Input 
                                value={this.props.contract}
                                onChangeText={(value) => this.props.expenseFormUpdate(
                                    {
                                        prop:'contract',
                                        value
                                    }
                                )} />
                        </Item>

                    <Button block>
                        <Text>Create</Text>
                    </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {date, amount, description, category, billable, contract, refno} = state.expenseform;

    return {date, amount, description, category, billable, contract, refno};
}

export default connect(null, {expenseFormUpdate})(ExpenseEntry);