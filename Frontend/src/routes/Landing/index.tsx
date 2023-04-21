/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
	Button,
	Grid,
	Typography,
	Container,
	Divider,
	TextField,
	InputLabel,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import { useSignMutation } from '../../graphql/generated';
import { useAppDispatch } from '../../hooks';
import { handleLogin } from '../../store/auth/authSlice';

const Landing: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const validationSchema = Yup.object({
		password: Yup.string().required(),
		email: Yup.string()
			.email('Enter a valid email')
			.required('Email is required'),
	}).required();

	const formOptions = { resolver: yupResolver(validationSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');

	// const context = React.useContext(AuthContext);

	const [sign] = useSignMutation({
		variables: { email, password },

		update(cache, { data }) {
			if (data) {
				const userData = data.signup;
				if (!userData.user) {
					navigate('/dashboard');
				}
				dispatch(handleLogin(userData.user));
			}
		},
	});
	function onSubmit() {
		sign();
	}

	const onGoogleLogin = () => {
		// userActions.googleLogin();
	};
	return (
		<Container
			maxWidth={false}
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundPosition: '50%',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				overflow: 'hidden',
				backgroundImage: 'url("./background.jpg")',
			}}
		>
			<Grid
				sx={{
					width: '50%',
					minWidth: '420px',
					maxWidth: '936px',
					height: 'auto',
					display: 'flex',
					position: 'relative',
				}}
			>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'relative',
						justifyContent: 'center',
						backgroundColor: '#252525',
						borderRadius: '4px 0 0 4px',
						width: '50%',
						height: 'auto',
						minHeight: '50vh',
						transition: 'all .25s ease-out',
					}}
				>
					<Grid
						sx={{
							width: '250px',
							minWidth: '200px',
							marginTop: '8vh',
							marginBottom: '2vh',
						}}
					>
						<img style={{ width: '100%', height: 'auto' }} src="./logo.svg" />
					</Grid>
					<Grid
						sx={{
							width: '74%',
							color: '#fff',
							textAlign: 'center',
							marginBottom: '13vh',
							left: '13%',
						}}
					>
						<Typography
							data-testid="mainTxt"
							sx={{ fontSize: '16px', marginBottom: '2vh' }}
						>
							WELCOME TO THE MARKETPLACE
						</Typography>
						<Typography sx={{ fontSize: '14px' }}>
							Exceptionly provides hands-on tested remote
						</Typography>
						<Typography sx={{ fontSize: '14px' }}>
							software engineers unlike any other outsourcing
						</Typography>
						<Typography sx={{ fontSize: '14px' }}>
							company. Our product delivers talent directly for hiring
						</Typography>
						<Typography sx={{ fontSize: '14px' }}>
							without a lifetime markup over 400%.
						</Typography>
					</Grid>
				</Grid>
				<Grid
					sx={{
						width: '50%',
						height: 'auto',
						minHeight: '50vh',
						transition: 'all .25s ease-out',
						position: 'relative',
						backgroundColor: '#fff',
						borderRadius: '0 4px 4px 0',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Grid
						sx={{ margin: '0 auto', maxWidth: '400px', padding: '6vh 10% 4vh' }}
					>
						<Grid sx={{ textAlign: 'center' }}>
							<img
								style={{ width: '150px', maxWidth: '180px', height: 'auto' }}
								src="/mark.svg"
								alt="exceptionly logo"
							/>
							<Grid
								sx={{
									marginTop: '1vh',
									fontSize: '15px',
									animation: 'TextOutAnimation .25s ease-out',
									opacity: '1',
								}}
							>
								Sign in to your account
							</Grid>
						</Grid>
						<Grid
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: '2vh',
								flexDirection: 'column',
							}}
						>
							<Grid>
								<Button
									startIcon={<GoogleIcon />}
									type="submit"
									variant="contained"
									sx={{
										marginBottom: '10px',
										width: '100%',
										backgroundColor: 'rgb(66, 133, 244)',
										'&:hover': {
											backgroundColor: '#1976d2!important',
										},
									}}
									onClick={onGoogleLogin}
								>
									SIGN WITH GOOGLE
								</Button>
								<Button
									startIcon={<LinkedInIcon />}
									type="submit"
									variant="contained"
									sx={{
										marginBottom: '10px',
										width: '100%',
										backgroundColor: 'rgb(40, 103, 178)',
										'&:hover': {
											backgroundColor: 'rgb(66, 133, 244)',
										},
									}}
								>
									SIGN WITH LINKEDIN
								</Button>
								<Button
									startIcon={<DashboardIcon />}
									type="submit"
									variant="contained"
									sx={{
										marginBottom: '10px',
										width: '100%',
										backgroundColor: 'rgb(242, 80, 34)',
										'&:hover': {
											backgroundColor: 'rgb(230, 117, 86)',
										},
									}}
								>
									SIGN WITH MICROSOFT
								</Button>
								<Divider
									sx={{
										color: 'rgb(102, 102, 102)',
										margin: '5px',
										flexShrink: 0,
										display: 'flex',
										whiteSpace: 'nowrap',
										textAlign: 'center',
										border: '0px',
										fontSize: '14px',
									}}
								>
									or use business email
								</Divider>
							</Grid>
							<Grid sx={{ width: '100%' }}>
								<form onSubmit={handleSubmit(onSubmit)}>
									<InputLabel sx={{ fontSize: '12px' }}>Email</InputLabel>
									<TextField
										{...register('email')}
										onChange={(e) => setEmail(e.target.value)}
										error={errors.email ? true : false}
										type="text"
										defaultValue=""
										helperText={errors.email?.message?.toString()}
										variant="standard"
										fullWidth
									/>
									<InputLabel sx={{ fontSize: '12px', marginTop: '30px' }}>
										Password
									</InputLabel>
									<TextField
										{...register('password')}
										onChange={(e) => setPassword(e.target.value)}
										error={errors.password ? true : false}
										type="password"
										defaultValue=""
										helperText={errors.password?.message?.toString()}
										variant="standard"
										fullWidth
									/>

									<Grid mt={5} container>
										<Button
											variant="contained"
											size="medium"
											type="submit"
											color="info"
											sx={{
												color: 'white',
												backgroundColor: 'rgb(25, 118, 210)',
											}}
										>
											Sign In
										</Button>
										<Button
											sx={{ marginLeft: '10px' }}
											size="medium"
											color="info"
										>
											Fogot Password?
										</Button>
									</Grid>
								</form>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						sx={{
							backgroundColor: 'rgba(37,37,37,.9)',
							borderRadius: '0 0 4px 0',
							display: 'flex',
							justifyContent: 'center',
							gap: '15px',
							position: 'absolute',
							bottom: '0px',
							height: '4vh',
							alignItems: 'center',
						}}
					>
						<span style={{ color: 'white' }}>{"Don't have an account?"}</span>
						<span style={{ color: '#4285f4' }}>Create Account</span>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};
export default Landing;
