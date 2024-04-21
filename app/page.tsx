import CardDiaries from "@/components/global/(diary)/card-diaries";
import PostContent from "@/components/global/(diary)/post-content";
import Wrapper from "@/components/global/wrapper";

export const revalidate = 0;
export default function Page(): React.ReactElement {
  return (
    <Wrapper>
        <CardDiaries/>
    </Wrapper>
  );
}