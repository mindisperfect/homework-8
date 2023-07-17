import React, { useEffect, useState } from "react";
import PostCard from "../components/mapCard/PostCard";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/loading/Loading";
import { END_POINT, API_KEY } from "../const/const";
import "../components/styles/Card.scss"

const MainP = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          `${END_POINT}category=business&apiKey=${API_KEY}` // ?q=${search}
        );
        setData(res?.data?.articles);
        console.log(res);
      } catch (err) {
        toast.error(err?.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data.map((el, i) => <PostCard key={i} {...el} />)
      )}
    </>
  );
};

export default MainP;
