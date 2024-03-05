import { findAllByText, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";
import { DataProvider } from "../../contexts/DataContext";

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
    waitFor(() => {
      expect(screen.getByText("Conférence &Co-Responsable")).toBeInTheDocument();
    })
  })
  it("a list a people is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByText("Isabelle")).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    render(
      <DataProvider>
        <Home/>
      </DataProvider>
    )

    expect(screen.getByText("contact@724events.com")).toBeInTheDocument();
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
