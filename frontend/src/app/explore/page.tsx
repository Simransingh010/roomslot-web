import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExploreSpacesView } from "@/components/explore/explore-spaces-view";

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 gradient-mesh">
        <ExploreSpacesView />
      </main>
      <Footer />
    </div>
  );
}
