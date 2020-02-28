import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const Example = (props) => {

    const {url} = useRouteMatch();

  return (
    <Pagination className="pagination-wrapper">
      <PaginationItem>
        <PaginationLink href={`${url.slice(0, url.length-2)}/1`}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink href={`${url.slice(0, url.length-2)}/2`}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink  href={`${url.slice(0, url.length-2)}/3`}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink  href={`${url.slice(0, url.length-2)}/4`}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink  href={`${url.slice(0, url.length-2)}/5`}>
          5
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}

export default Example;