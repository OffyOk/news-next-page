import { Container } from "@mui/material";
import { useRouter } from "next/router";
import NewsPage from "@/components/news/NewsPage";
import Layout from "@/components/Layout";

export default function Page() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Layout>
      <Container maxWidth="lg">{slug && <NewsPage slug={slug} />}</Container>
    </Layout>
  );
}
