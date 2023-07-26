import { FallbackComponent } from "components";
import { withErrorBoundary } from "react-error-boundary";
import { Routing } from "pages";

function App() {
  return <Routing />;
}

export default withErrorBoundary(App, {
  FallbackComponent,
});
