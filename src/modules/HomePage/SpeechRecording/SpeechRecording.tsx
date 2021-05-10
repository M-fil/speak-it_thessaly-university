import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  AsyncGetWordsActions,
  AsyncSetWordActions,
  ClearWordsActions,
} from '@store/actions/wordsActions';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useTranslation } from 'react-i18next';
import Style from './StyledSpeechRecording';
import { Button } from 'antd';

const SpeechRecording: React.FC = () => {
  const dispatch = useDispatch();
  const { transcript, resetTranscript } = useSpeechRecognition();
  const microphoneRef = useRef(null);
  const { t } = useTranslation();

  const getWordsGroup = useCallback(
    group => {
      dispatch(AsyncGetWordsActions(group));
    },
    [dispatch],
  );
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert(`${t('SpeechRecording.notBrowserSupportSpeechRecording')}`);
    }
  }, [t]);

  const renderSpeech = useCallback(() => {
    microphoneRef.current.classList.add('listening');
    SpeechRecognition.startListening({ language: 'en-US', continuous: true });
  }, []);

  const stopHandle = useCallback(() => {
    microphoneRef.current.classList.remove('listening');
    SpeechRecognition.stopListening();
  }, []);

  const handleReset = useCallback(() => {
    stopHandle();
    resetTranscript();
    getWordsGroup(0);
    dispatch(ClearWordsActions());
  }, [getWordsGroup, resetTranscript, stopHandle, dispatch]);

  useEffect(() => {
    dispatch(AsyncSetWordActions(transcript.toLocaleLowerCase()));
  }, [dispatch, transcript]);

  return (
    <>
      <Style.Buttons>
        <Button type="primary" onClick={handleReset}>
          {t('SpeechRecording.buttonReset')}
        </Button>
        <Button type="primary" onClick={stopHandle}>
          {t('SpeechRecording.buttonStop')}
        </Button>
        <Button
          type="primary"
          onClick={renderSpeech}
          ref={microphoneRef}
          id="buttonSpeak">
          {t('SpeechRecording.buttonSpeak')}
        </Button>
      </Style.Buttons>
    </>
  );
};

export default SpeechRecording;
