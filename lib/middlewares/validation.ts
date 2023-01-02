import withJoi from 'next-joi';

export const validate = withJoi({
    onValidationError: (_, res, error) => {
        res.status(400).json({
            success: false,
            errors: error.details,
        });
        return;
    },
});
