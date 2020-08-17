/**
 * @Author: harsha
 * @Date:   2020-08-13T12:26:37+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T16:20:49+02:00
 */

import React, { Fragment, Component } from 'react';
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
import { dataHeaderStack } from '../../helpers/utils';
import { Table, Button } from 'antd';

class DataListingComponent extends Component {
  componentDidMount() {
    const { fetchCommentsData } = this.props;
    fetchCommentsData();
  }
  render() {
    const { commentsListing, isLoading, setCommentsData } = this.props;
    return (
      <Fragment>
        <ContentContainer data-test="commentsListingComponent">
          <DataContainer>
            <CardsContainer>
              <DataGrid comments={commentsListing} />
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
