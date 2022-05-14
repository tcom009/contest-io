import { get } from 'lodash';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import Input from '../Elements/Input.tsx';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Label from '../Elements/Label';
import ErrorSpan from '../Elements/ErrorSpan';
const refferees = ['Chaos', 'FishTail', 'Poison', 'AK'];

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
    for (const key in data) {
      if (key !== 'refferee') {
        const str1 = data[key].slice(1).toLowerCase();
        const str2 = data[key].charAt(0).toUpperCase() + str1;
        data[key] = str2;
      }
      console.log(data);
    }
  };

  useEffect(() => {
    console.log(errors);
  });
  const customStyles = {
    container: () => ({ background: 'white', borderRadius: '30px' }),
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
  };
  return (
    <>
      <div className='column '>
        <div className='has-text-white is-size-4 mb-4 has-text-centered	 '>
          Inicia un nuevo juego
        </div>

        <div className='container mb-3'>
          <Label caption='Arbitro' isRequired />

          <Controller
            name='refferee'
            control={control}
            rules={{ required: 'Selecciona un Arbitro' }}
            render={({ field: { onChange } }) => (
              <Select
                styles={customStyles}
                onChange={(e) => onChange(e.label)}
                options={refferees.map((refferee) => ({
                  value: refferee,
                  label: refferee,
                }))}
                placeholder='Arbitro'
              />
            )}
          />
          <ErrorSpan errorMessage={get(errors, 'refferee.message')} />
        </div>

        <div className='mb-3'>
          <Input
            placeholder='Jugador 1'
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
            placeholder='Jugador 2'
            name='player2'
            register={register}
            label='Jugador 2'
            registerVal='playerTwo'
            isRequired={true}
            errorMessage={get(errors.playerTwo, 'message')}
          />
        </div>

        {/* Add a third player section */}
        {!addPlayer && (
          <button
            className='button is-ghost mb-1'
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
                placeholder='Jugador 3'
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
