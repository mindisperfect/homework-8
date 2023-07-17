import { Fragment, useEffect, useState } from "react";
import PostCard from "../components/mapCard/PostCard";
import axios from "axios";
import { END_POINT, API_KEY, PAGE_LIMIT } from "../const/const";
import { toast } from "react-toastify";
import "../components/styles/Card.scss"

const Business = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios(
          `${END_POINT}category=science&q=${search}&pageSize=${PAGE_LIMIT}&page=${page}&apiKey=${API_KEY}`
        );
        let { data: totalData } = await axios(
          `${END_POINT}category=science&q=${search}&apiKey=${API_KEY}`
        );
        setPost(data.articles);
        setTotal(totalData.totalResults);
      } catch (err) {
        toast.error(err?.message);
      }
    };
    getData();
  }, [search, page]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const getPage = (key) => {
    setPage(1);
    setPage(key);
  };
  let items = [];
  for (let i = 1; i <= Math.ceil(total / PAGE_LIMIT); i++) {
    items.push(
      <li className="pagination" onClick={() => getPage(i)} key={i}>
        {i} {i === page ? "active" : ""}
      </li>
    );
  }
  let pagination = total > PAGE_LIMIT && <div className="page">{items}</div>;
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="header-search">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              color: "#191919",
              fontSize: "20px",
              paddingBottom: "20px",
            }}
          >
            Total news: {total}
          </h1>
          <div className="post-item">
            {post.map((el, index) => {
              return <PostCard key={index} {...el} />;
            })}
          </div>
          <div>{pagination}</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Business;
