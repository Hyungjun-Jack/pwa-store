import Head from "next/head";
import PostLink from "../components/PostLink";
import Axios from "axios";
import movie from "./movie";

export default class extends React.Component {
  static async getInitialProps() {
    const {
      data: {
        data: { movies }
      }
    } = await Axios.get("https://yts.am/api/v2/list_movies.json");
    return { movies };
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <Head>
          <title>Home | PWA Store</title>
        </Head>
        <h1>Movies:</h1>
        {movies.map(movie => (
          <ul key={movie.id}>
            <li>
              <PostLink title={movie.title} id={movie.id} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
