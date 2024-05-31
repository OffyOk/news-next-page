import Layout from "@/components/Layout";
import { Container } from "@mui/material";
import RecentlyNews from "@/components/RecentlyNews";

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <RecentlyNews />
      </Container>
    </Layout>
  );
}
