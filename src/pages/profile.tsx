import Profiles from '../components/profiles';

export default function profile({ edit = false }:{ edit?: boolean}) {
  return (
  <article className="grid min-h-screen place-content-center place-items-center">
    <Profiles edit={edit} />
  </article>
    );
}
