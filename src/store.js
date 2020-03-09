import React from "react";

export const initialState = {
  puzzle: null, // an object of all molecule positions with puzzle index
  currentPositions: [],
  gameScore: 0,
  userName: "",
  userEmail: "",
  gameID: "",
  puzzleID: "",
  playTime: 0,
  score: 0,
  activeMoleculePosition: []
};

export const reducer = (state, action) => {
  const { puzzle } = state;
  switch (action.type) {
    case "updateMoleculePosition":
      return {
        ...state,
        activeMoleculePosition: action.activeMoleculePosition
      }
    case "resetCurrentPuzzle":
      return {
        ...state,
        currentPositions: puzzle,
        playTime: 0
      };
    case "savePlayer":
      return {
        ...state,
        gameID: action.gameID,
        playerID: action.playerID,
        playerName: action.playerName,
        playerEmail: action.playerEmail
      };
    case "setCurrentPuzzleResult":
      return {
        ...state,
        currentPuzzleResult: {
          puzzleID: action.puzzleID,
          playTime: action.playTime,
          score: action.score
        }
      };
    case "finishGame":
      return {
        ...state,
        playerID: action.playerID,
        gameScore: action.gameScore
      };
    default:
      return state;
  }
};

export const Context = React.createContext();
