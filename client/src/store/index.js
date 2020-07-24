import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client';
import router from '../router';

const socket = io('http://localhost:3000')

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gameStatus: 'start',
        playerName: '',
        isRandomCountdown: 0,
        isClick: false,
        isSubmitted: false,
        shooterResult: '',
        winner: '',
        loser: '',
        gameLog: {}
    },
    mutations: {
        playerLogin (state, player) {
            state.gameStatus = 'idle'
            state.playerName = player.name
            localStorage.setItem('current_player', player.name)
            router.push({name: 'Waiting'})
        },

        setRandomCountdown (state, number) {
            console.log(state, '<< state', number,'<< number value')
            state.gameStatus = 'play'
            state.isRandomCountdown = number.value
        },
        setWinner (state, winner) {
            state.winner = winner.win
            state.loser = winner.lose
            router.push({name: 'Win'})
        },
        
        shooterSubmit (state, shooter) {
            state.shooterResult = shooter.result
        },

        showShooter (state, shooters) {
            state.gameLog = shooters.value
        },

        showWinner (state, winner) {
            state.winner = winner
            state.gameStatus = 'end'
        },

        resetClick (state) {
            state.isClick = false
        },

        clicked (state) {
            state.isClick = true
        },

        resetSubmitted (state) {
            state.isSubmitted = false
        },

        submitted (state) {
            state.isSubmitted = true
        },

        resetGame (state) {
            state.gameStatus = 'start',
            state.playerName = '',
            state.isRandomCountdown = 0,
            state.isClick = false,
            state.isSubmitted = false,
            state.shooterResult = '',
            state.winner = {},
            state.gameLog = {}
        }

    },
    actions: {
        playerLogin (context, player) {
        
            
        },

        setRandomCountdown (context, number) {
            context.commit('setRandomCountdown', number)
            router.push({name: 'Game'})
        },

        shooterSubmit (context, shooter) {
            context.commit('shooterSubmit', shooter)
            context.commit('submitted')
            socket.emit('shoot-submit', { playerName: this.state.playerName,
            shooterResult: shooter.result})
        },

        showShooter (context, shooters) {
            context.commit('showWinner', shooters)
        },

        resetSubmitted (context) {
            context.commit('resetSubmitted')
        },

        requestResetGame () {
            socket.emit('request-reset-game')
        },

        resetGame (context) {
            context.commit('resetGame')
        }
    },
    modules: {},
});
