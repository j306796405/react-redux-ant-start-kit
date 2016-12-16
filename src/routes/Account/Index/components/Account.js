import React from 'react'
import { Table } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
}, {
    title: 'Age',
    dataIndex: 'age',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

export const Account = React.createClass({
    handleTableChange(pagination, filters, sorter) {
        /*const pager = this.state.pagination;
        pager.current = pagination.current;

        debugger;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            pageSize: pagination.pageSize,
            page: pagination.current,
        });*/
    },
    fetch(params = {}) {
        var fetchList = this.props.fetchList;
        fetchList({page: 1, pageSize: 10});
    },
    componentDidMount() {
        this.fetch();
    },
    render() {
        var props = this.props,
            list = props.list,
            pagination = props.pagination,
            isFetching = props.isFetching;

        return (
            <Table columns={columns}
                   rowKey={record => record.key}
                   dataSource={list}
                   pagination={pagination}
                   loading={isFetching}
                   onChange={this.handleTableChange}
            />
        );
    },
});

Account.propTypes = {

}

export default Account
