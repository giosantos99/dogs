import { useEffect, lazy, Suspense } from "react";

import { STATS_GET } from "../../api";

import Head from "../../helper/Head";
import Loading from "../../helper/Loading";
import Error from "../../helper/Error";

import useFetch from "../../hooks/useFetch";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      const { url, options } = STATS_GET(token);

      await request(url, options);
    };

    getData();
  }, [request]);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  if (!data) return null;

  return (
    <div>
      <Head title="Estatísticas" />

      <Suspense fallback={<></>}>
        <UserStatsGraphs data={data} />
      </Suspense>
    </div>
  );
};

export default UserStats;
