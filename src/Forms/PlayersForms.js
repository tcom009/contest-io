import { get } from 'lodash';
import { useForm } from 'react-hook-form';
import Input from '../Elements/Input.tsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
const PlayersForm = () => {
  const [addPlayer, setAddPlayer] = useState(false);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='column '>
        <div className='has-text-white is-size-4 mb-4 has-text-centered	 '>
          Inicia un nuevo juego
        </div>
        <div className='mb-3'>
          <Input
            name='player1'
            type='text'
            register={register}
            label='Jugador 1'
            registerVal='playerOne'
            isRequired={true}
            errorMessage={get(errors, 'playerOne.message')}
          />
        </div>
        <div className=' mb-3'>
          <Input
            name='player2'
            register={register}
            label='Jugador 2'
            registerVal='playerTwo'
            isRequired={true}
            errorMessage={get(errors.playerTwo, 'message')}
          />
        </div>
        {!addPlayer && (
          <button
            className='button is-ghost mb-3'
            onClick={() => {
              setAddPlayer(true);
            }}
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              size={'xs'}
              color={'green'}
              fixedWidth
            />{' '}
            Añadir un tercer jugador
          </button>
        )}
        {addPlayer && (
          <>
            <div className='container mt-3'>
              <Input
                name='player3'
                register={register}
                label='Jugador 3'
                registerVal='playerThree'
                isRequired={true}
                errorMessage={get(errors.playerThree, 'message')}
              />

              <button
                className='button is-danger is-outlined is-small my-3 is-pulled-right'
                onClick={() => setAddPlayer(false)}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className='mr-1'
                  color={'red'}
                  size={'sm'}
                />
                Remover
              </button>
            </div>
          </>
        )}

        <button
          className='button is-primary is-fullwidth'
          onClick={handleSubmit(onSubmit)}
        >
          ¡Empezar!
        </button>
      </div>
    </>
  );
};

export default PlayersForm;
