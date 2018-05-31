import React from "react";
import { render, Simulate, wait } from "react-testing-library";
import "jest-dom/extend-expect";
import { FetchGitMobContributors } from "./fetch-git-mob-contributors";

beforeEach(function() {
  global.fetch = jest.fn(async () => {
    return {
      ok: true,
      json: function() {
        return [
          {
            total: 59,
            author: {
              login: "rkotze",
              id: 1234,
              avatar_url: "https://avatars2.githubusercontent.com/u/1234?v=4"
            }
          },
          {
            total: 122,
            author: {
              login: "dideler",
              id: 4567,
              avatar_url: "https://avatars2.githubusercontent.com/u/4567?v=4"
            }
          }
        ];
      }
    };
  });
});

test("Click button to fetch git mob contributors and display in a list", async () => {
  const { getByText, getAllByTestId, getByTestId, container } = render(
    <FetchGitMobContributors />
  );

  Simulate.click(getByText("Fetch Git Mob contributors"));

  await wait(() => getByTestId("contributor"));

  expect(fetch).toHaveBeenCalledTimes(1);

  const contributors = getAllByTestId("contributor");
  expect(contributors).toHaveLength(2);

  expect(contributors[0]).toHaveTextContent("rkotze");
  expect(contributors[0]).toHaveTextContent("59");

  expect(contributors[1]).toHaveTextContent("dideler");
  expect(contributors[1]).toHaveTextContent("122");
});
