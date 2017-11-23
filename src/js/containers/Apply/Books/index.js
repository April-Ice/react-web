import React, {Component} from 'react'
import {browserHistory} from 'react-router';
import {
    Card,
    Col,
    Row,
    Table,
    Icon,
    Checkbox,
    Input
} from 'antd';

import {fetchData} from '../../../components/AjaxConsumer'
import BooksData from 'json!../../../../data/Books/books.json';
import CheckBooksData from 'json!../../../../data/Books/checkbooks.json';
import styles from './index.scss';

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            booksList: BooksData.data,
            checkBooksList: CheckBooksData.data
        };
    }

    componentDidMount() {}

    //输入框清除数据
    emitEmpty = () => {
        this
            .bookNameInput
            .focus();
        this.setState({bookName: ''});
    }
    onChangeBookName = (e) => {
        this.setState({bookName: e.target.value});
        // this.emitEmpty();
    }
    //完成book
    onCheck = (key) => {
        console.log("key" + key);
        const {checkBooksList} = this.state;
        const booksList = [...this.state.booksList];
        // let newCheck = booksList.filter(item => item.key == key)[0];
        let newCheck;
        booksList.map((book, index) => {
            console.log("book" + JSON.stringify(book.key));
            if (book.key == key) {
                newCheck = book;
                this.setState({
                    booksList: booksList.filter(item => item.key !== key)
                });
            }
        })
        newCheck.key = checkBooksList.length + 1;
        this.setState({
            checkBooksList: [
                ...checkBooksList,
                newCheck
            ]
        });
        console.log("newCheck" + JSON.stringify(newCheck));
    }
    //添加book
    addNewbooks = () => {
        const {booksList} = this.state;
        const newBook = {
            key: booksList.length + 10,
            name: this.state.bookName,
            state: 'uncheck'
        };
        console.log(JSON.stringify(newBook));
        this.setState({
            booksList: [
                ...booksList,
                newBook
            ]
        });
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Checkbox onChange={() => this.onCheck(record.key)}>完成</Checkbox>
                )
            }
        ];

        const {bookName, booksList, checkBooksList} = this.state;
        const suffix = bookName
            ? <Icon type="close-circle" onClick={this.emitEmpty}/>
            : null;

        return (
            <div>
                <div className={styles.bookContent}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Card title" className={styles.bookCard}>
                                <Input
                                    addonAfter={< Icon type = "plus" onClick = {
                                    this.addNewbooks
                                } />}
                                    placeholder="添加book"
                                    value={bookName}
                                    suffix={suffix}
                                    onChange={this.onChangeBookName}
                                    onPressEnter={this.onChangeBookName}
                                    ref={node => this.bookNameInput = node}/>
                                <Table columns={columns} dataSource={booksList}/>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" className={styles.bookCard}><Table columns={columns} dataSource={checkBooksList}/></Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" className={styles.bookCard}><Table columns={columns} dataSource={checkBooksList}/></Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
