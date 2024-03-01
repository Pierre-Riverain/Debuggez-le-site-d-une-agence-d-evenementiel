import { render, renderHook, screen } from "@testing-library/react";
import DataContext, { DataProvider, useData } from "./index";

let testContainer;
let TestComponent;

beforeEach(() => {
    testContainer = document.createElement("div");
    document.body.appendChild(testContainer);

    TestComponent = () => {
        const { data } = useData();
        if (data) {
            return(<p>
                Les données sont présentes !
            </p>);
        } else {
            return(<p>
                Aucune données !
            </p>)
        }
    }
})

afterEach(() => {
    document.body.removeChild(testContainer);
    testContainer = null;
    TestComponent = null;
})

describe("When a data context is created", () => {
    it("datas is loaded", async () => {
        render((
                <DataProvider>
                    <TestComponent/>
                </DataProvider>
            ));
        expect(screen.getByText("Les données sont présentes !")).toBeInTheDocument();
    });
});
