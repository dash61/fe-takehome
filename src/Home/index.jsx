import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Header from "../components/Header";
import TabControls from "../components/TabControls";
import DevicesBar from "../components/DevicesBar";

function Home() {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <>
      <Header />
      <main className="content">
        <DevicesBar />
        <TabControls page={page} />
        <Pagination
          className="pager"
          count={10}
          variant="outlined"
          color="secondary"
          onChange={handleChange}
        />
      </main>
    </>
  )
}

export default Home
