module.exports = function ({ application, dispatch }) {
  /**
   * Handles the login message.
   */
  const handleLoginMessage = ({ message, clientId }) => {
    const { params } = message.value.b.o

    // Store the player's data associated with the clientId
    dispatch.setState(clientId, 'player', params)

    application.consoleMessage({
      message: `Successfully logged in as <highlight>${params.userName}</highlight>`,
      type: 'celebrate'
    })
  }

  /**
   * Hooks the login packet.
   */
  dispatch.onMessage({
    type: 'aj',
    message: 'login',
    callback: handleLoginMessage
  })
}
