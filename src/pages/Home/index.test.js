import { findAllByText, fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import data from "../../datas/events.json";
import { DataProvider } from "../../contexts/DataContext";
import Page from "./index";

const useContext = jest.fn().mockReturnValue(data);

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<DataProvider>
      <Home />
    </DataProvider>
    );
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<DataProvider>
        <Home />
      </DataProvider>
      );
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(await screen.findByText("Message envoyé !"), 2000);
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByTestId("eventList")).toBeDefined();
  })
  it("a list a people is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByTestId("teamList")).toBeDefined();
  })
  it("a footer is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByTestId("footer")).toBeDefined();
  })
  it("an event card, with the last event, is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByTestId("lastEvent")).toBeDefined();
  })
});
