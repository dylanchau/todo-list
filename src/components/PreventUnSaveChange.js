/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-children-prop */
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React, { useCallback, useEffect, useState } from 'react'
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useBlocker,
  useLocation,
  useNavigate,
} from 'react-router-dom'

function AlertDialog({ isBlocking, isSaving, onSave }) {
  function useCallbackPrompt(when) {
    const navigate = useNavigate()
    const location = useLocation()
    const [showPrompt, setShowPrompt] = useState(false)
    const [lastLocation, setLastLocation] = useState(null)
    const [confirmedNavigation, setConfirmedNavigation] = useState(false)

    const cancelNavigation = useCallback(() => {
      setShowPrompt(false)
    }, [])

    const handleBlockedNavigation = useCallback(
      (nextLocation) => {
        if (
          !confirmedNavigation &&
          nextLocation.location.pathname !== location.pathname
        ) {
          setShowPrompt(true)
          setLastLocation(nextLocation)
          return false
        }
        return true
      },
      [confirmedNavigation]
    )

    const confirmNavigation = useCallback(() => {
      setShowPrompt(false)
      setConfirmedNavigation(true)
    }, [])

    useEffect(() => {
      if (confirmedNavigation && lastLocation) {
        navigate(lastLocation.location.pathname)
      }
    }, [confirmedNavigation, lastLocation])

    useBlocker(handleBlockedNavigation, when)

    return [showPrompt, confirmNavigation, cancelNavigation]
  }

  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(isBlocking)
  return (
    <Dialog
      open={showPrompt}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Unsaved Changes</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          It looks like you have been editing something. If you leave before
          saving, your changes will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirmNavigation} color="primary">
          Yes
        </Button>
        <Button onClick={cancelNavigation} color="primary" autoFocus>
          Back to Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default function PreventingTransitionsExample() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" exact children={<BlockingForm />} />
        <Route path="/one" children={<h3>One</h3>} />
        <Route path="/two" children={<h3>Two</h3>} />
      </Routes>
    </Router>
  )
}

function BlockingForm() {
  const [isBlocking, setIsBlocking] = useState(false)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        event.target.reset()
        setIsBlocking(false)
      }}
    >
      <AlertDialog isBlocking={isBlocking} />
      <p>
        Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(event) => {
            setIsBlocking(event.target.value.length > 0)
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  )
}
