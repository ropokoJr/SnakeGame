import React, {useEffect, useMemo, useState, useStates } from "react";
import {SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Direction } from "../types";
import * as Haptics from "expo-haptics";

const { height } = Dimensions.get("window");
import {
    COLS,
    FOOD_START,
    HEADER_HEIGHT,
    INCREMENT,
    PIXEL,
    SNAKE_START,
    SPEED,
} from "../consts";

import Header from "./Header"
import Board from "./Board"
import Snake from "./Snake"
import Food from "./Food"

import { colors } from "../styles/theme"

const Game = () => {
    const [direction, setDirection] = useState(Direction.Right);
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const insets = useSafeAreaInsets();
    const ROWS = Math.floor(
        (height - insets?.top - insets?.bottom - HEADER_HEIGHT) / PIXEL
    );
    const limits = {
        minX: 0,
        maxX: COLS - 1,
        minY: 0,
        maxY: ROWS - 1,
    };


    function resetGame() {
        setSnake(SNAKE_START);
        setDirection(Direction.Right);
    }

    useEffect (() => {
        if (!isGameOver) [
            const speedInterval = setInterval(() => {
                !isGamePaused && moveSnake();
            }, SPEED);
            return () => clearInterval(speedInterval);
        }   else {
            resetGame();
        }
    }, [snake, isGameOver, isGamePaused]);

    function handleGesture(event) {
        const { translationX, translationY } = event.nativeEvent;

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                setDirection(Direction.Right)
            } else {
                setDirection(Direction.Left)
            }
        } else {
            if (translationY > 0) {
                setDirection(Direction.Down)
            } else {
                setDirection(Direction.Up)
            }
        }
    }

    function moveSnake () {
        const head = { ...snake.[0] };

        switch (direction) {
            case Direction.Right:
                head.x += 1;
                break;
            case Direction.Left:
                head.x -= 1;
                break;
            case Direction.Down:
                head.y += 1;
                break;
            case Direction.Up:
                head.y -=1;
                break;
                default:
                break;
        }
        if (testGameOver(head)) {
            //PAREI NA LINHA 100 "setIsGameOver(true)"
        }
    }
            })
        ]

    })
}