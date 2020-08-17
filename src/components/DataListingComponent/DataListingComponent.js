/**
 * @Author: harsha
 * @Date:   2020-08-13T12:26:37+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:29:22+02:00
 */

import React, { Fragment, Component, Profiler } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import {
  ContentContainer,
  DataContainer,
  CardsContainer,
  Card,
  CardInfo,
  CardDetails,
} from './DataListingStyles';
import { fetchCommentsData, setCommentsData } from '../../actions';
import { dataHeaderStack, getMetrics } from '../../helpers/utils';
import { Table, Button, Spin } from 'antd';

class DataListingComponent extends Component {
  render() {
    const { commentsListing, isLoading, fetchCommentsData } = this.props;
    return (
      <Fragment>
        <ContentContainer data-test="commentsListingComponent">
          <Button
            type="primary"
            shape="round"
            size={'large'}
            onClick={e => fetchCommentsData()}>
            Fetch Data
          </Button>
          <Link to="/perf">
            <Button type="primary" shape="round" size={'large'}>
              Performance Monitor
            </Button>
          </Link>
          <DataContainer>
            <CardsContainer>
              {isLoading && <Spin tip="Loading..." />}
              <Profiler id="Comments Listing" onRender={getMetrics}>
                <DataGrid comments={commentsListing} />
              </Profiler>
            </CardsContainer>
          </DataContainer>
        </ContentContainer>
      </Fragment>
    );
  }
}

const DataGrid = ({ comments }) => {
  return (
    <Table
      pagination={true}
      size="small"
      dataSource={comments}
      columns={dataHeaderStack}
    />
  );
};

function mapStateToProps({ commentsStack }) {
  return {
    commentsListing: commentsStack.commentsData,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCommentsData, setCommentsData }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataListingComponent);
